using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public class CreateStockRequestDto
    {
        // similar to StockDto except no ID because it will be created internally
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cannot be over 10 characters long.")]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        [MaxLength(280, ErrorMessage = "Company name cannot be over 280 characters long.")]
        public string CompanyName { get; set; } = string.Empty;
        [Required]
        [Range(1, 1000000000)]
        public decimal Purchase { get; set; }
        [Required]
        [Range(0.001, 100)]
        public decimal LastDiv { get; set; }
        [Required]
        [MaxLength(100, ErrorMessage = "Industry cannot be over 100 characters long.")]
        public string Industry { get; set; } = string.Empty;
        [Required]
        [Range(1, 5000000000)]
        public long MarketCap { get; set; }
    }
}