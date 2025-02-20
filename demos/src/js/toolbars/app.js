import * as icons from '../icons.js';
import { createToolbar } from './toolbar.js';
import { setupPanel } from '../panels/panel.js';

function createAppToolbar() {
    let toolbar = createToolbar("p4w-app-toolbar");
    toolbar.setAttribute("aria-label", "Application toolbar");
    toolbar.setAttribute("role", "region");
    toolbar.innerHTML = 
    `<div id="p4w-settings" class="p4w-panel" aria-live="polite">
        <button 
            type="button" 
            class="p4w-lightup"
            aria-haspopup="true" 
            aria-expanded="false"
            data-desc="Settings">
            ${icons.settings}
            ${icons.close}
        </button>
        <div>
        </div>
    </div>
    <div id="p4w-help" class="p4w-lightup">
        <a href="../help.html"  title="View help" target="_blank">
            ${icons.help}
        </a>
    </div>`;

    document.querySelector("body").insertBefore(toolbar, document.querySelector("body script#p4w-initApp"));
    setupPanel(
        "p4w-settings", 
        false, 
        () => {
            document.querySelector("body").classList.add("p4w-dim-70");
        },
        () => {
            document.querySelector("body").classList.remove("p4w-dim-70");
        }
    );
}



export { createAppToolbar };