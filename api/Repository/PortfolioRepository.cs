using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository(ApplicationDBContext context) : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context = context;
        public async Task<List<Stock>> GetUserPortfolio(AppUser user)
        {
            return await _context.Portfolios.Where(u => u.AppUserId == user.Id)
                .Select(portfolio => new Stock
                {
                    Id = portfolio.StockId,
                    Symbol = portfolio.Stock.Symbol,
                    CompanyName = portfolio.Stock.CompanyName,
                    Purchase = portfolio.Stock.Purchase,
                    LastDiv = portfolio.Stock.LastDiv,
                    Industry = portfolio.Stock.Industry,
                    MarketCap = portfolio.Stock.MarketCap,
                    Comments = portfolio.Stock.Comments,
                }).ToListAsync();
        }

        public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();

            return portfolio;
        }

        public async Task<Portfolio?> DeleteAsync(AppUser appUser, string symbol)
        {
            var portfolioModel = await _context.Portfolios.FirstOrDefaultAsync(u => u.AppUserId == appUser.Id && u.Stock.Symbol.ToLower() == symbol);

            if (portfolioModel == null)
                return null;

            _context.Portfolios.Remove(portfolioModel);
            await _context.SaveChangesAsync();

            return portfolioModel;
        }
    }
}