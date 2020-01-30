﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reminder.API.Contracts;
using Reminder.API.Contracts.Requests;
using Reminder.API.Entities;
using Reminder.API.Services;

namespace Reminder.API.Controllers
{
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILessonService _LessonService;
        public LessonController(ILessonService LessonService)
        {
            _LessonService = LessonService;
        }

        [HttpGet(ApiRoutes.Lesson.GetAll)]
        public async Task<IActionResult> GetAll()
        {
            var lesson = await _LessonService.GetLessons();

            return Ok(lesson);
        }

        [HttpGet(ApiRoutes.Lesson.Get)]
        public async Task<IActionResult> Get([FromRoute] Guid lessonId)
        {
            var lesson = await _LessonService.GetLessonById(lessonId);

            if (lesson == null)
                return NotFound();

            return Ok(lesson);
        }

        [HttpPost(ApiRoutes.Lesson.Create)]
        public async Task<IActionResult> Create([FromBody] CreateLessonRequest lessonRequest )
        {
            var lesson = new Lesson
            {
                Id = Guid.NewGuid().ToString(),
                Class = lessonRequest.Class,
                Code = lessonRequest.Code,
                Name = lessonRequest.Name,
                Day = lessonRequest.Day,
                Time = lessonRequest.Time
            };

            await _LessonService.CreateLesson(lesson);

            var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            var locationUri = baseUrl + "/" + ApiRoutes.Lesson.Get.Replace("{lessonId}", lesson.Id);

            return Created(locationUri, lesson);
        }

        [HttpPut(ApiRoutes.Lesson.Update)]
        public async Task<IActionResult> Update([FromRoute] Guid lessonId, [FromBody] UpdateLessonRequest lessonRequest)
        {
            var lesson = new Lesson
            {
                Id = lessonId.ToString(),
                Class = lessonRequest.Class,
                Code = lessonRequest.Code,
                Name = lessonRequest.Name,
                Day = lessonRequest.Day,
                Time = lessonRequest.Time
            };

            var updated = await _LessonService.UpdateLesson(lesson);

            if (updated)
                return Ok(lesson);

            return NotFound();
        }

        [HttpDelete(ApiRoutes.Lesson.Delete)]
        public async Task<IActionResult> Delete([FromRoute] Guid lessonId)
        {
            var deleted = await _LessonService.DeleteLesson(lessonId);

            if (deleted)
                return NoContent();

            return NotFound();
        }
    }
}