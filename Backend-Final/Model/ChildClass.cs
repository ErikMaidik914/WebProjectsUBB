using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PracticWeb.Model
{
    [Table("Property")]
    public class ChildClass
    {
        [Key]
        public int Id { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public ParentClass Parent { get; set; }

        public int ParentId { get; set; }

        public ChildClass(int id, string address, string description, int parentId, ParentClass parent)
        {
            Id = id;
            Address = address;
            Description = description;
            ParentId = parentId;
            Parent = parent;
            
        }

        public ChildClass(int id, string address, string description, int parentId)
        {
            Id = id;
            Address = address;
            Description = description;
            ParentId = parentId;
            Parent = new ParentClass();

        }


        public ChildClass()
        {
            Id = 0;
            Address = "";
            Description = "";
            ParentId = 0;
            Parent = new ParentClass();

        }
    }
}
