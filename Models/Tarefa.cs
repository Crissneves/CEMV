﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("TAREFA")]
    public partial class Tarefa
    {
        public short Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Nome { get; set; }
        [Required]
        [StringLength(1)]
        public string Iniciado { get; set; }
        [Required]
        [StringLength(1)]
        public string Finalizado { get; set; }
        [StringLength(50)]
        public string Executor { get; set; }
    }
}