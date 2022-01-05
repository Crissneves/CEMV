using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppCEMV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorController : ControllerBase
    {
        private readonly CEMVDBContext _dbContext;

        public CorController(CEMVDBContext context)
        {
            _dbContext = context;
        }
        // GET: api/<CorController>
        //[HttpGet]
        //public Cor Get(int id)
        //{
        //    var cor = _dbContext.Cor.Find(id);
        //    return cor;
        //}

        [HttpGet]
        [Route("GetAll")]        
        public async Task<IActionResult> GetAll()
        {
            var cores = await _dbContext.Cor.ToListAsync();
            if (cores != null)
                return Ok(cores);
            else       
            return NotFound();
            
        }

        // GET api/<CorController>/5
        [HttpGet()]
        public IList<Cor> GetCorPorDescricao([FromBody] string descricao)
        {
            var cores = _dbContext.Cor.Where(w => w.Descricao.ToUpper().Contains(descricao.ToUpper())).ToList();
            return cores;
        }

        // GET api/<CorController>/5
        [HttpGet("{id}")]
        public Cor Get(short id)
        {
            var cor = _dbContext.Cor.Find(id);
            return cor;
        }

        // POST api/<CorController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
