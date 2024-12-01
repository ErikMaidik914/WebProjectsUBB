using System.ComponentModel.DataAnnotations.Schema;

namespace PracticWeb.Model
{
    [Table("User")]
    public class User
    {
        public int Id { get; set; }

        public String Username { get; set; }

        public String Password { get; set; }

        public ICollection<ParentClass> ParentClasses { get; set; }

        public User(int id, string username, string password)
        {
            Id = id;
            Username = username;
            Password = password;
            ParentClasses = new List<ParentClass>();
        }

        public User()
        {
            Id = 0;
            Username = "";
            Password = "";
            ParentClasses = new List<ParentClass>();
        }
    }
}
