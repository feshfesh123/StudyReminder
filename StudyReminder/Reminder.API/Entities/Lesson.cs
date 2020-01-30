using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.API.Entities
{
    public class Lesson
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Class { get; set; }
        public int Time { get; set; }
        public int Day { get; set; }
    }
}
