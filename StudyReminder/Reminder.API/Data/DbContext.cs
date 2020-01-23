﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Reminder.API.Data
{
    public class DbContext : IdentityDbContext
    {
        public DbContext(DbContextOptions<DbContext> options)
            : base(options)
        {
        }
    }
}
