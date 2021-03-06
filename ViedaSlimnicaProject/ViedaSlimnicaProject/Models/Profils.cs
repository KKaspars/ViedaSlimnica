﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ViedaSlimnicaProject.Models
{
    public class Profils
    {
            [Key]
            public int ProfileID { get; set; }
            [DisplayName("E-pasts")]
            public string UserName { get; set; }
            [DisplayName("Parole")]
            [DataType(DataType.Password)]
            [Required]
            public string Password { get; set; }
            [DisplayName("Loma")]
            public string RoleStart { get; set; }
            public virtual Pacients Patient { get; set; }
            [DisplayName("Vārds")]
            public string Vards { get; set; }
            [DisplayName("Uzvārds")]
            public string Uzvards { get; set; } 
            public bool ToReset { get; set; }
            [DisplayName("Statuss")]
            public bool AccountBlocked { get; set; }

            public string Role()
        {
            switch (RoleStart)
            {
                case "User":
                    return "Pacients";
                case "Employee":
                    return "Ārsts";
                case "SuperAdmin":
                    return "Admins";
                default:
                    return "?";
            }

        }
    }

}