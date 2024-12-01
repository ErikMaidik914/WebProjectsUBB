using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracticWeb.DTO;
using PracticWeb.Mapper;
using PracticWeb.Model;

namespace PracticWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentClassController : ControllerBase
    {
        private readonly Dao _context;

        public ParentClassController(Dao context)
        {
            _context = context;
        }


        [HttpGet("getAllParents")]
        public IActionResult GetAllParentClasses()
        {
            return Ok(_context.ParentClasses.ToList().Select(ParentClassMapper.ToDTO));
        }

        [HttpGet("getParent/{id}")]
        public IActionResult GetParentClassById(int id)
        {
            ParentClass? ParentClass = _context.ParentClasses.Find(id);
            if (ParentClass == null)
            {
                return NotFound();
            }
            return Ok(ParentClassMapper.ToDTO(ParentClass));
        }


        [HttpGet("filterByName/{name}")]
        public IActionResult GetAllParentsByName(string name)
        {
            List<ParentClass> parentClasses = [.. _context.ParentClasses.Where(p => p.Name == name)];
            if (parentClasses.Count == 0)
            {
                return NotFound();
            }
            return Ok(parentClasses.Select(ParentClassMapper.ToDTO));
        }

        [HttpGet("filterByUserId/{userId}")]
        public IActionResult GetAllParentsByUserId(int userId)
        {
            List<ParentClass> parentClasses = [.. _context.ParentClasses.Where(p => p.UserId == userId)];
            if (parentClasses.Count == 0)
            {
                return NotFound();
            }
            return Ok(parentClasses.Select(ParentClassMapper.ToDTO));
        }

        [HttpGet("filterByUserIdAndName/{userId}/{name}")]
        public IActionResult GetAllParentsByUserIdAndName(int userId, string name)
        {
            List<ParentClass> parentClasses = [.. _context.ParentClasses.Where(p => p.UserId == userId && p.Name == name)];
            if (parentClasses.Count == 0)
            {
                return NotFound();
            }
            return Ok(parentClasses.Select(ParentClassMapper.ToDTO));
        }

       // [HttpGet("filterByDateAndName/{date}/{name}")] //NEW
       // public IActionResult GetAllParentsDateAndName(string date, string name)
      //  {

           // List<ParentClass> parentClasses = [.. _context.ParentClasses.Where(p => p.Date == date && p.Name == name)];
           // if (parentClasses.Count == 0)
           // {
             //   return NotFound();
           // }
          //  return Ok(parentClasses.Select(ParentClassMapper.ToDTO));
        //}



        //-----------GETS-----------------


        [HttpPost("addParent")]
        public IActionResult AddParentClass([FromBody] ParentClassDTO ParentClassDTO)
        {
            User? user = _context.Users.Find(ParentClassDTO.UserId);
            if (user == null)
            {
                return NotFound();
            }
            ParentClass parentClass = ParentClassMapper.ToModel(ParentClassDTO);
            parentClass.User = user;
            ParentClass savedParentClass = _context.ParentClasses.Add(parentClass).Entity;
            _context.SaveChanges();
            return Ok(ParentClassMapper.ToDTO(savedParentClass));
        }

        [HttpPost("addManyParents")]
        public IActionResult AddManyParentClasses([FromBody] List<ParentClassDTO> ParentClassDTOs)
        {
            List<ParentClass> parentClasses = ParentClassDTOs.Select(ParentClassMapper.ToModel).ToList();
            foreach (ParentClass parentClass in parentClasses)
            {
                User? user = _context.Users.Find(parentClass.UserId);
                if (user == null)
                {
                    return NotFound();
                }
                parentClass.User = user;
            }
            _context.ParentClasses.AddRange(parentClasses);
            _context.SaveChanges();
            return Ok(parentClasses.Select(ParentClassMapper.ToDTO));
        }

        //----------------ADDS-------------------
        [HttpPut("updateParent")]
        public IActionResult UpdateParentClass([FromBody] ParentClassDTO ParentClassDTO)
        {
            try
            {
                User? user = _context.Users.Find(ParentClassDTO.UserId);
                if (user == null)
                {
                    return NotFound();
                }
                ParentClass parentClass = ParentClassMapper.ToModel(ParentClassDTO);
                parentClass.User = user;
                ParentClass updatedParentClass = _context.ParentClasses.Update(parentClass).Entity;
                _context.SaveChanges();
                return Ok(ParentClassMapper.ToDTO(updatedParentClass));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        //-----------UPDATES-----------------

        [HttpDelete("removeParent/{id}")]
        public IActionResult DeleteParentClass(int id)
        {
            try
            {
                ParentClass? ParentClass = _context.ParentClasses.Find(id);
                if (ParentClass == null)
                {
                    return NotFound();
                }
                _context.ParentClasses.Remove(ParentClass);
                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        //-----------DELETES-----------------
    }
}
