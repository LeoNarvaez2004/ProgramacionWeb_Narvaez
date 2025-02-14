using Microsoft.AspNetCore.Mvc;

namespace Study.Controllers
{
    public class Medicamento : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public string Welcome()
        {
            return "Hello World!";
        }
    }
}
