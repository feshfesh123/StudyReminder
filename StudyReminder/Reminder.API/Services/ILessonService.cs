using Reminder.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.API.Services
{
    public interface ILessonService
    {
        Task<List<Lesson>> GetLessons(string userId);
        Task<bool> CreateLesson(Lesson lesson);
        Task<Lesson> GetLessonById(Guid lessonId);
        Task<bool> UpdateLesson(Lesson lessonToUpdate);
        Task<bool> DeleteLesson(Guid lessonId);
        Task<bool> UserOwnsLesson(Guid lessonId, string userId);
    }
}
