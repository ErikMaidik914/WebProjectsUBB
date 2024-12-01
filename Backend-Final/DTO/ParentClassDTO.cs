using PracticWeb.Model;

namespace PracticWeb.DTO
{
    public class ParentClassDTO(int id, int UserId, int ChildId, string Name)
    {
        public int Id { get; set; } = id;

        public int UserId { get; set; } = UserId;

        public int ChildId { get; set; } = ChildId;

        public string Name { get; set; } = Name;
    }
}
