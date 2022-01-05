
import { HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

/* Classe abstrata para reutilização pelos demais serviços da aplicação */
export abstract class BaseService {
    protected UrlService: string = environment.apiUrl;

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'POST'
            })
        };
    }

    protected ObterAuthHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer`
            })
        };
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        const customError: string[] = [];
        const customResponse = { error: { errors: [] }};

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === 'Unknown Error') {
                customError.push('Ocorreu um erro desconhecido');
                response.error.errors = customError;
            }
        }
        if (response.status === 500) {
            customError.push('Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.');

            // Erros do tipo 500 não possuem uma lista de erros
            // A lista de erros do HttpErrorResponse é readonly
            customResponse.error.errors = customError;
            return throwError(customResponse);
        }

        console.error(response);
        return throwError(response);
    }

    getFileName(response: HttpResponse<Blob>) {
        let filename: string;
        try {
          const contentDisposition: string = response.headers.get('content-disposition');
          const r = /(?:filename=")(.+)(?:")/;
          filename = r.exec(contentDisposition)[1];
        }
        catch (e) {
          filename = 'myfile.txt';
        }
        return filename;
      }

}
