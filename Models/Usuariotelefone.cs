// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("USUARIOTELEFONE")]
    public partial class Usuariotelefone
    {
        [Key]
        [Column("USUARIOTELEFONE_ID")]
        public long UsuariotelefoneId { get; set; }
        [Column("USUARIO_ID")]
        public short UsuarioId { get; set; }
        [Column("TIPOTELEFONE_ID")]
        public byte TipotelefoneId { get; set; }
        [Column("DDD")]
        public byte Ddd { get; set; }
        [Required]
        [Column("NUMERO")]
        [StringLength(10)]
        public string Numero { get; set; }
        [Column("RAMAL")]
        [StringLength(10)]
        public string Ramal { get; set; }
        [Column("INDICADORWHATSAPP")]
        public bool Indicadorwhatsapp { get; set; }
        [Column("INDICADORPRINCIPAL")]
        public bool Indicadorprincipal { get; set; }

        [ForeignKey(nameof(UsuarioId))]
        [InverseProperty("Usuariotelefone")]
        public virtual Usuario Usuario { get; set; }
    }
}