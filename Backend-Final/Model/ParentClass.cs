using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PracticWeb.Model
{
    [Table("UserToProperties")]
    public class ParentClass
    {
        [Key]
        public int Id { get; set; }

        public ICollection<ChildClass> Children { get; set; }

        public int UserId { get; set; }
        

        public User User { get; set; }

        public int ChildId { get; set; } 
        public string Name { get; set; }

        public ParentClass(int id, int userId, User user, int childId, string name)
        {
            Id = id;
            Children = [];
            UserId = userId;
            User = user;
            ChildId = childId;
            Name = name;
        }

        public ParentClass(int id, int userId, int childId, string name)
        {
            Id = id;
            Children = [];
            UserId = userId;
            User = new User();
            ChildId = childId;
            Name = name;
        }

        public ParentClass(int id, string name)
        {
            Id = id;
            Children = [];
            UserId = 0;
            ChildId = 0;
            Name = name;

        }

        public ParentClass()
        {
            Id = 0;
            Children = [];
            UserId = 0;
            ChildId = 0;
            Name = "";
        }
    }
}
