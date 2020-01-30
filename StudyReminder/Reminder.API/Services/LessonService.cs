﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Reminder.API.Data;
using Reminder.API.Entities;

namespace Reminder.API.Services
{
    public class LessonService : ILessonService
    {
        private readonly DataContext _dataContext;
        public LessonService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<bool> CreateLesson(Lesson lesson)
        {
            await _dataContext.Lessons.AddAsync(lesson);
            var created = await _dataContext.SaveChangesAsync();
            return created > 0;
        }

        public async Task<bool> DeleteLesson(Guid lessonId)
        {
            var lesson = await GetLessonById(lessonId);
            if (lesson == null) return false;
            _dataContext.Lessons.Remove(lesson);
            var deleted = await _dataContext.SaveChangesAsync();
            return deleted > 0;
        }

        public async Task<Lesson> GetLessonById(Guid lessonId)
        {
            var lesson = _dataContext.Lessons.Where(x => x.Id == lessonId.ToString()).FirstOrDefault();

            return lesson;
        }

        public async Task<List<Lesson>> GetLessons()
        {
            return await _dataContext.Lessons.ToListAsync();
        }

        public async Task<bool> UpdateLesson(Lesson lessonToUpdate)
        {
            var lesson = await GetLessonById(Guid.Parse(lessonToUpdate.Id));
            if (lesson == null) return false;

            _dataContext.Update(lessonToUpdate);

            var updated = await _dataContext.SaveChangesAsync();

            return updated > 0;
        }
    }
}
