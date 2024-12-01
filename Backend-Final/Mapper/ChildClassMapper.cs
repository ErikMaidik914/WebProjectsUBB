using PracticWeb.DTO;
using PracticWeb.Model;

namespace PracticWeb.Mapper
{
    
    public class ChildClassMapper
    {
        public static ChildClassDTO ToDTO(ChildClass child)
        {
            return new ChildClassDTO(child.Id, child.Address, child.Description, child.ParentId);
        }

        public static ChildClass ToModel(ChildClassDTO childDTO)
        {
            return new ChildClass(childDTO.Id, childDTO.Address, childDTO.Description, childDTO.ParentId);
        }
    }
}
