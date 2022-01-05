using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppCEMV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefaController : ControllerBase
    {
        private readonly CEMVDBContext _dbContext;
        public TarefaController(CEMVDBContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var tarefas = await _dbContext.Tarefa.ToListAsync();
            if (tarefas != null)
                return Ok(tarefas);
            else
                return NotFound();

        }
        // GET: api/<TarefaController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TarefaController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TarefaController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TarefaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TarefaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
