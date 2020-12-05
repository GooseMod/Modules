const version = '1.0.0';

let newStickyKeybindFunction;

function injMod() {
    function newSticky() {
        let mousePosition;
        let offset = [0,0];
        let isDown = false;

        let div = document.createElement("div");
        div.classList.add('goosemod-sticky-note');
        div.style.position = "absolute";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = "100px";
        div.style.height = "100px";

        //To get standard discord look
        //Making the div boxes to house the stuff
        let noteContainerElContainer = document.createElement('div');
        noteContainerElContainer.classList.add('layerContainer-yqaFcK');

        let noteContainerElLayer = document.createElement('div');
        noteContainerElLayer.classList.add('layer-2KE1M9');

        let noteContainerEl = document.createElement('div');
        noteContainerEl.classList.add("focusLock-Ns3yie");
        noteContainerEl.setAttribute('role', 'dialog');
        noteContainerEl.setAttribute('aria-label', 'Sticky Note');
        noteContainerEl.setAttribute('tabindex', '-1');
        noteContainerEl.setAttribute('aria-model', 'true');

        let noteContainerElRoot = document.createElement('div');
        noteContainerElRoot.classList.add("root-1gCeng", "small-3iVZYw", "fullscreenOnMobile-1bD22y");
        noteContainerElRoot.style.opacity = '1';
        noteContainerElRoot.style.transform = 'scale(1)';

        //Header stuff
        let noteContainerElHeaderDiv = document.createElement('div');
        noteContainerElHeaderDiv.classList.add('flex-1xMQg5', 'flex-1O1GKY', 'horizontal-1ae9ci', 'horizontal-2EEEnY', 'flex-1O1GKY', 'directionRow-3v3tfG', 'justifyStart-2NDFzi', 'alignCenter-1dQNNs', 'noWrap-3jynv6', 'header-1TKi98');
        noteContainerElHeaderDiv.style.flex = '0 0 auto';

        let noteContainerElHeaderH = document.createElement('h4');
        noteContainerElHeaderH.classList.add("colorStandard-2KCXvj", "size14-e6ZScH", "h4-AQvcAz", "title-3sZWYQ", "defaultColor-1_ajX0", "defaultMarginh4-2vWMG5");
        noteContainerElHeaderH.textContent = "Sticky Note";

        let noteContainerElHeaderX = document.createElement('h2')
        noteContainerElHeaderX.classList.add("colorStandard-2KCXvj", "size14-e6ZScH", "h4-AQvcAz", "defaultColor-1_ajX0", "defaultMarginh4-2vWMG5");
        noteContainerElHeaderX.textContent = "⨯";
        noteContainerElHeaderX.setAttribute('style', 'display: flex; justify-content: flex-end; font-size: 25px; color: #B9BBBE;');

        //Body stuff
        let noteContainerElBody = document.createElement('div');
        noteContainerElBody.classList.add('content-1LAB8Z', 'content-mK72R6', 'thin-1ybCId', 'scrollerBase-289Jih');
        noteContainerElBody.setAttribute('dir', 'ltr');
        noteContainerElBody.style.overflow = 'hidden scroll';
        noteContainerElBody.style.paddingRight = '8px';

        let noteContainerElBodyText = document.createElement('div');
        noteContainerElBodyText.classList.add('markup-2BOw-j');
        noteContainerElBodyText.setAttribute('aria-multiline', 'true');
        noteContainerElBodyText.setAttribute('data-can-focus', 'true');
        noteContainerElBodyText.setAttribute('data-slate-editor', 'true');
        noteContainerElBodyText.setAttribute('contenteditable', 'true');
        noteContainerElBodyText.setAttribute('autocorrect', 'off');
        noteContainerElBodyText.setAttribute('spellcheck', 'true');
        noteContainerElBodyText.setAttribute('role', 'textbox');
        noteContainerElBodyText.setAttribute('data-gramm', 'true');
        noteContainerElBodyText.setAttribute('style', 'outline: none; white-space: pre-wrap; overflow-wrap: break-word; -webkit-user-modify: read-write-plaintext-only; padding-bottom: 0px;');

        //Appending root elements
        noteContainerElContainer.appendChild(noteContainerElLayer);
        noteContainerElLayer.appendChild(noteContainerEl);
        noteContainerEl.appendChild(noteContainerElRoot);

        //Appending headers
        noteContainerElRoot.appendChild(noteContainerElHeaderDiv);
        noteContainerElHeaderDiv.appendChild(noteContainerElHeaderH);
        noteContainerElHeaderDiv.appendChild(noteContainerElHeaderX);

        //Appending body
        noteContainerElRoot.appendChild(noteContainerElBody);
        noteContainerElBody.appendChild(noteContainerElBodyText);

        div.appendChild(noteContainerElContainer);

        document.body.appendChild(div);

        // Setting the active focused note on creation.
        if (document.getElementById("active-sticky") && document.getElementById("active-sticky") != div) {
            document.getElementById("active-sticky").removeAttribute('id');
            div.setAttribute('id', 'active-sticky');
        };

        // Checking if mouse is up or down
        noteContainerElHeaderDiv.addEventListener('mousedown', function(e) {
            isDown = true;
            // Setting the active focused note.
            if (document.getElementById("active-sticky") && document.getElementById("active-sticky") != div) {
                document.body.insertBefore(div, document.getElementById("active-sticky").nextSibling);
                document.getElementById("active-sticky").removeAttribute('id');
            };
            div.setAttribute('id', 'active-sticky');
            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
        }, true);

        document.addEventListener('mouseup', function() {
            isDown = false;
        }, true);

        // Dragging events
        document.addEventListener('mousemove', function(event) {
            if (isDown) {
                event.preventDefault();
                mousePosition = {

                    x : event.clientX,
                    y : event.clientY

                };
                div.style.left = (mousePosition.x + offset[0]) + 'px';
                div.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);


        // Button events
        noteContainerElHeaderX.addEventListener('mouseenter', e => {
            noteContainerElHeaderX.style.color = "white";
        });

        noteContainerElHeaderX.addEventListener('mouseleave', e => {
            noteContainerElHeaderX.style.color = "#B9BBBE"
        });

        noteContainerElHeaderX.addEventListener('click', e => {
            event.preventDefault();
            div.remove();
        });
    };
    // Open 1 initial note on module load.
    newSticky();

    // Keybind (Ctrl+S) to open a new note.
    newStickyKeybindFunction = (e) => {
        //console.log(e.code + ' ' + e.ctrlKey)
        if (e.code === 'KeyD' && e.ctrlKey) {
            e.preventDefault();
            newSticky();
        }
    };

    document.addEventListener('keypress', newStickyKeybindFunction);

    // Button to open a new note.
    // We cannot get this SVG button to work. If you can, please send a pull request to wherever this is.
    //
    /*let svg = document.createElement("svg");

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class","icon-22AiRD");
    svg.setAttribute("viewBox", "0 0 448 512");
    svg.setAttribute("role", "img");

    let path = svg.appendChild(document.createElement("path"));

    path.setAttribute("fill", "currentColor"); // This'll pick the most suitable color, but you can change it if you need to
    path.setAttribute("d", "M312 320h136V56c0-13-11-24-24-24H24C11 32 0 43 0 56v400c0 13 11 24 24 24h264V344c0-13 11-24 24-24zm129 55l-98 98c-4 5-11 7-17 7h-6V352h128v6c0 6-2 13-7 17z");

    const noteButtonEl = document.createElement('div');
    noteButtonEl.classList.add('iconWrapper-2OrFZ1', 'clickable-3rdHwn', 'goosemod-sticky-note');
    noteButtonEl.setAttribute('role', 'button');
    noteButtonEl.setAttribute('aria-label', 'New Sticky Note');
    noteButtonEl.setAttribute('tabindex', '0');

    const noteButtonElImage = document.createElement('svg');
    noteButtonElImage.classList.add('icon-22AiRD');
    noteButtonElImage.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    noteButtonElImage.setAttribute('viewBox', "0 0 448 512");

    const noteButtonElImagePath = document.createElement("path");
    noteButtonElImagePath.setAttribute('fill', "currentColor"); // This'll pick the most suitable color, but you can change it if you need to
    noteButtonElImagePath.setAttribute('d', "M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z");

    noteButtonElImage.appendChild(noteButtonElImagePath);
    noteButtonEl.appendChild(svg);
    document.getElementsByClassName("toolbar-1t6TWx")[0].insertBefore(noteButtonEl, document.querySelector('div[aria-label="Inbox"]'));

    noteButtonEl.addEventListener('click', e => {
        newSticky();
    });*/
};

function rmMod() {
    Array.from(document.getElementsByClassName("goosemod-sticky-note")).forEach((note) => note.remove());
    document.removeEventListener('keypress', newStickyKeybindFunction);
};

let obj = {
	// Activating module
	onImport: async function () {
		goosemodScope.logger.debug('Sticky Notes', 'Starting...');
        	injMod();
	},

	// Removing function
	remove: async function () {
	    goosemodScope.logger.debug('Sticky Notes', 'Stopping...');
        	rmMod();
    	},
		
	// Data
	name: 'Sticky Notes',
    	description: 'Allows you to create temporary sticky notes on the screen. Open new sticky notes with Ctrl+D. They will disappear as soon as you refresh discord.',

	author: ['Fjorge', 'Liam The Protogen'],

	version: version
};

obj
