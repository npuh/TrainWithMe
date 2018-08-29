using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ViimeinenToivo.Models;

namespace ViimeinenToivo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NmWorkoutActivitiesController : ControllerBase
    {
        private readonly ViikkoProjektiDBContext _context;

        public NmWorkoutActivitiesController(ViikkoProjektiDBContext context)
        {
            _context = context;
        }

        // GET: api/NmWorkoutActivities
        [HttpGet]
        public IEnumerable<NmWorkoutActivity> GetNmWorkoutActivity()
        {
            return _context.NmWorkoutActivity.ToList();
        }

        // GET: api/NmWorkoutActivities/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNmWorkoutActivity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var nmWorkoutActivity = await _context.NmWorkoutActivity.FindAsync(id);

            if (nmWorkoutActivity == null)
            {
                return NotFound();
            }

            return Ok(nmWorkoutActivity);
        }

        // PUT: api/NmWorkoutActivities/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNmWorkoutActivity([FromRoute] int id, [FromBody] NmWorkoutActivity nmWorkoutActivity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nmWorkoutActivity.NmWaId)
            {
                return BadRequest();
            }

            _context.Entry(nmWorkoutActivity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NmWorkoutActivityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NmWorkoutActivities
        [HttpPost]
        public async Task<IActionResult> PostNmWorkoutActivity([FromBody] NmWorkoutActivity nmWorkoutActivity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.NmWorkoutActivity.Add(nmWorkoutActivity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNmWorkoutActivity", new { id = nmWorkoutActivity.NmWaId }, nmWorkoutActivity);
        }

        // DELETE: api/NmWorkoutActivities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNmWorkoutActivity([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var nmWorkoutActivity = await _context.NmWorkoutActivity.FindAsync(id);
            if (nmWorkoutActivity == null)
            {
                return NotFound();
            }

            _context.NmWorkoutActivity.Remove(nmWorkoutActivity);
            await _context.SaveChangesAsync();

            return Ok(nmWorkoutActivity);
        }

        private bool NmWorkoutActivityExists(int id)
        {
            return _context.NmWorkoutActivity.Any(e => e.NmWaId == id);
        }
    }
}