using System.Web.Mvc;

namespace BootstrapFormBuilder.Controllers
{
    public partial class FormBuilderController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }
    }
}