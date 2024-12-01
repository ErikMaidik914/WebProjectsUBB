

namespace PracticWeb.DTO
{
    public class ChildClassDTO(int id, string address, string description, int parentId)
    {
        public int Id { get; set; } = id;
        public string Address { get; set; } = address;
        public string Description { get; set; } = description;
        public int ParentId { get; set; } = parentId;
    }
}
