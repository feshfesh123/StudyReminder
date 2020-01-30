using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.API.Contracts
{
    public static class ApiRoutes
    {
        public static class Lesson
        {
            public const string GetAll = "api/lessons";
            public const string Get = "api/lessons/{lessonId}";
            public const string Create = "api/lessons";
            public const string Update = "api/lessons/{lessonId}";
            public const string Delete = "api/lessons/{lessonId}";
        }

        public static class Identity
        {
            public const string Login = "api/identity/login";
            public const string Register = "api/identity/register";
        }
    }
}
