using Microsoft.AspNetCore.Mvc;
using PracticWeb.DTO;
using PracticWeb.Mapper;
using PracticWeb.Model;

namespace PracticWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(Dao context) : ControllerBase
    {
        private readonly Dao _context = context;

        [HttpGet("login")]
        public IActionResult Login(String username, String password)
        {
            User? user = _context.Users.FirstOrDefault(u => u.Username == username && u.Password == password);
            if(user == null)
            {
                return NotFound();
            }
            return Ok(UserMapper.ToDTO(user));
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserDTO user)
        {
            User savedUser = _context.Users.Add(UserMapper.ToModel(user)).Entity;
            _context.SaveChanges();
            return Ok(UserMapper.ToDTO(savedUser));
        }
    }
}
