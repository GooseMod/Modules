const version = '2.1.0';

let newStickyKeybindFunction;

let moduleData = {
    settings: {
        openNoteOnLoad: true
    }
};

function injMod() {

    moduleData = {
        settings: {
            openNoteOnLoad: true
        }
    };

    moduleData.setSetting = (setting, value) => {
        if (moduleData.settings[setting]) {
            moduleData.settings[setting] = value;
        };
    };

    let noteCount = 0;

    moduleData.newSticky = (becomeActive = true) => {
        let mousePosition;
        let offset = [0,0];
        let isDown = false;

        let div = document.createElement("div");
        div.classList.add('goosemod-sticky-note', 'goosemod-sticky-note-asset', `goosemod-sticky-note-number-${noteCount}`);
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

        let noteContainerElHeaderN = document.createElement('h2');
        noteContainerElHeaderN.classList.add("colorStandard-2KCXvj", "size14-e6ZScH", "h4-AQvcAz", "defaultColor-1_ajX0", "defaultMarginh4-2vWMG5", "clickable-3rdHwn");
        noteContainerElHeaderN.textContent = "🞣";
        noteContainerElHeaderN.setAttribute('style', 'display: flex; font-size: 25px; color: #B9BBBE; align-items: center; margin-right: 5px;');

        let noteContainerElHeaderX = document.createElement('h2');
        noteContainerElHeaderX.classList.add("colorStandard-2KCXvj", "size14-e6ZScH", "h4-AQvcAz", "defaultColor-1_ajX0", "defaultMarginh4-2vWMG5", "clickable-3rdHwn");
        noteContainerElHeaderX.textContent = "⨯";
        noteContainerElHeaderX.setAttribute('style', 'display: flex; font-size: 29px; color: #B9BBBE; align-items: center');

        //Body stuff
        let noteContainerElBody = document.createElement('div');
        noteContainerElBody.classList.add('content-1LAB8Z', 'content-mK72R6', 'thin-1ybCId', 'scrollerBase-289Jih');
        noteContainerElBody.setAttribute('dir', 'ltr');
        noteContainerElBody.style.overflow = 'hidden scroll';
        noteContainerElBody.style.paddingRight = '8px';

        let noteContainerElBodyText = document.createElement('div');
        noteContainerElBodyText.classList.add('markup-2BOw-j', 'scrollableContainer-2NUZem', 'webkit-HjD9Er');
        noteContainerElBodyText.setAttribute('aria-multiline', 'true');
        noteCntainerElBodyText.setAttribute('data-can-focus', 'true');
        noteContainerElBodyText.setAttribute('data-slate-editor', 'true');
        noteContainerElBodyText.setAttribute('contenteditable', 'true');
        noteContainerElBodyText.setAttribute('autocorrect', 'off');
        noteContainerElBodyText.setAttribute('spellcheck', 'tru');
        noteContainerElBodyText.setAttribute('role', 'textbox');
        noteContainerElBodyText.setAttribute('data-gramm', 'true');
        noteContainerElBodyText.setAttribute('style', 'outline: none; white-space: pre-wrap; overflow-wrap: break-word; -webkit-user-modify: read-write-plaintext-only; padding: 5px;');

        //Appending root elements
        noteContainerElContainer.appendChild(noteContainerElLayer);
        noteContainerElLayer.appendChild(noteContainerEl);
        noteContainerEl.appendChild(noteContainerElRoot);

        //Appending headers
        noteContainerElRoot.appendChild(noteContainerElHeaderDiv);
        noteContainerElHeaderDiv.appendChild(noteContainerElHeaderH);
        noteContainerElHeaderDiv.appendChild(noteContainerElHeaderN);
        noteContainerElHeaderDiv.appendChild(noteContainerElHeaderX);

        //Appending body
        noteContainerElRoot.appendChild(noteContainerElBody);
        noteContainerElBody.appendChild(noteContainerElBodyText);

        // Appending root div
        div.appendChild(noteContainerElContainer);
        document.body.appendChild(div);

        function becomeActiveNote(moveToTop = false) {
            function compareNotes(n1, n2 = div) {
                // Returns true if they have the same class lists (de-facto same note due to the goosemod-note-number-* class)
                return (n1.classList.value === n2.classList.value);
            };
            const currentActiveNote = document.getElementById("active-sticky");
            // Setting the note to become focused and on top.
            if (currentActiveNote && !compareNotes(currentActiveNote, div)) {
                if (moveToTop && div.getAttribute('id') != 'active-sticky') {
                    document.body.insertBefore(div, currentActiveNote.nextElementSibling);
                };
                currentActiveNote.removeAttribute('id');
                div.setAttribute('id', 'active-sticky');
            } else if (Array.from(document.getElementsByClassName('goosemod-sticky-note')).filter(note => !compareNotes(note, div)).length <= 0) {
                div.setAttribute('id', 'active-sticky');
            };
        };

        // Becoming the active note on creation
        if (becomeActive) {
            becomeActiveNote();
        };

        // Checking if mouse is up or down
        noteContainerElHeaderDiv.addEventListener('mousedown', function(e) {
            isDown = true;

            // Becoming active on click.
            becomeActiveNote(true);

            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
        }, true);

        noteContainerElBody.addEventListener('click', function(e) {
            if (div.getAttribute('id') != 'active-sticky' && !isDown) {
                e.preventDefault();
                becomeActiveNote(true);
            };
        });

        document.addEventListener('mouseup', function() {
            isDown = false;
        }, true);

        // Dragging events
        document.addEventListener('mousemove', function(e) {
            if (isDown) {
                e.preventDefault();
                mousePosition = {

                    x : e.clientX,
                    y : e.clientY

                };
                div.style.left = (mousePosition.x + offset[0]) + 'px';
                div.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);


        // Close button events
        noteContainerElHeaderX.addEventListener('mouseenter', e => {
            noteContainerElHeaderX.style.color = "white";
        });

        noteContainerElHeaderX.addEventListener('mouseleave', e => {
            noteContainerElHeaderX.style.color = "#B9BBBE"
        });

        noteContainerElHeaderX.addEventListener('click', e => {
            e.preventDefault();
            const newActive = div.previousElementSibling;
            // Pass on active-sticky id on note close
            if (newActive != undefined && newActive.classList.contains('goosemod-sticky-note')) {
                div.removeAttribute('id');
                newActive.setAttribute('id', 'active-sticky');
            }
            div.remove();
        });

        // New note button events
        noteContainerElHeaderN.addEventListener('mouseenter', e => {
            noteContainerElHeaderN.style.color = "white";
        });

        noteContainerElHeaderN.addEventListener('mouseleave', e => {
            noteContainerElHeaderN.style.color = "#B9BBBE"
        });

        noteContainerElHeaderN.addEventListener('click', e => {
            e.preventDefault();
            moduleData.newSticky(false);
        });

        noteCount++;
        return div;
    };

    // Keybind (Ctrl+D) to open a new note.
    newStickyKeybindFunction = (e) => {
        //console.log(e.code + ' ' + e.ctrlKey)
        if (e.code === 'KeyD' && e.ctrlKey) {
            e.preventDefault();
            moduleData.newSticky();
        };
    };

    document.addEventListener('keydown', newStickyKeybindFunction);
};

function rmMod() {
    Array.from(document.getElementsByClassName("goosemod-sticky-note-asset")).forEach((note) => note.remove());
    document.removeEventListener('keydown', newStickyKeybindFunction);
};

let obj = {
    // Importing module
    onImport: async function () {
        goosemodScope.logger.debug('Sticky Notes', 'Starting...');
        injMod();
    },

    // Removing module
    remove: async function () {
        goosemodScope.logger.debug('Sticky Notes', 'Stopping...');
        let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Sticky Notes');
        goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
        rmMod();
    },

    // Run after loading
    onLoadingFinished: async function () {
        goosemodScope.settings.createItem('Sticky Notes', [`(v${version})`,
            {
                type: 'header',
                text: 'Sticky Notes Settings'
            },
            {
                type: 'toggle',
                text: 'Launch Note on Load',
                subtext: 'Open a sticky note automatically once the module is loaded in.',
                onToggle: (v) => { moduleData.setSetting('openNoteOnLoad', v) },
                isToggled: () => moduleData.settings['openNoteOnLoad']
            }
        ]);

        if (moduleData.settings['openNoteOnLoad']) {
            moduleData.newSticky();
        };
    },

    // Getting and setting settings
    getSettings: async function() { return [moduleData.settings] },
    loadSettings: async function ([settings]) { moduleData.settings = settings; },

    // Data
    name: 'Sticky Notes',
    description: 'Allows you to create temporary sticky notes on the screen. Open new sticky notes with Ctrl+D or the New Note button.',

    author: ['Fjorge', 'Liam The Protogen'],

    version: version
};

obj
