using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.API.Contracts.Requests
{
    public class UpdateLessonRequest
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Class { get; set; }
        public int Time { get; set; }
        public int Day { get; set; }
    }
}
