using Microsoft.AspNetCore.Components;

namespace alexanderjwoods.github.io.Shared.PageModels
{
    public class NavMenuPageModel : ComponentBase
    {
        private bool collapseNavMenu = true;

        public string NavMenuCssClass => collapseNavMenu ? "collapse" : null;

        public void ToggleNavMenu()
        {
            collapseNavMenu = !collapseNavMenu;
        }
    }
}