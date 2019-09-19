// Modal
        var divModal = $w.document.createElement('div');
        var divModalDialog = $w.document.createElement('div');
        var divModalContent = $w.document.createElement('div');
        var divModalHeader = $w.document.createElement('div');
        var btnDismiss = $w.document.createElement('button');
        var titleHeader = $w.document.createElement('h1');
        var divModalBody = $w.document.createElement('div');
        var divPanelBody = $w.document.createElement('div');
        var divModalFilterContainer = $w.document.createElement('div');
        var divModalFooter = $w.document.createElement('div');
        var btnAceptar = $w.document.createElement('button');
        var inputSearch = $w.document.createElement('input');
        var ulContainer = $w.document.createElement('ul');
        inputSearch.type = 'text';
        inputSearch.value = '';
        inputSearch.placeholder = 'BUSCAR';
        inputSearch.onkeyup = search.bind(this);
        btnAceptar.type = 'button';
        btnAceptar.classList = 'btn btn-primary';
        btnAceptar.setAttribute('data-dismiss', 'modal');
        btnAceptar.innerHTML = '<span>ACEPTAR</span>';
        divModalFooter.classList = 'modal-footer';
        divModalFooter.appendChild(btnAceptar);
        divModalFilterContainer.setAttribute('id', 'modal-filter-container');
        divModalFilterContainer.style.maxHeight = '500px';
        divModalFilterContainer.style.overflow = 'auto';
        divModalFilterContainer.style.marginTop = '15px';
        divPanelBody.classList = 'panel-body';
        divPanelBody.appendChild(divModalFilterContainer);
        divModalBody.classList = 'modal-body';
        divModalBody.appendChild(inputSearch);
        divModalBody.appendChild(divPanelBody);
        titleHeader.classList = 'modal-title';
        btnDismiss.type = 'button';
        btnDismiss.classList = 'close';
        btnDismiss.setAttribute('data-dismiss', 'modal');
        btnDismiss.setAttribute('aria-label', 'Close');
        btnDismiss.innerHTML = '<span aria-hidden="true">X</span>';
        divModalHeader.classList = 'modal-header';
        divModalHeader.appendChild(titleHeader);
        divModalHeader.appendChild(btnDismiss);
        divModalContent.classList = 'modal-content';
        divModalContent.appendChild(divModalHeader);
        divModalContent.appendChild(divModalBody);
        divModalContent.appendChild(divModalFooter);
        divModalDialog.classList = 'modal-dialog';
        divModalDialog.role = 'document';
        divModalDialog.appendChild(divModalContent);
        divModal.setAttribute('id', 'modal-filter');
        divModal.classList = 'modal fade modal-md';
        divModal.tabIndex = '-1';
        divModal.role = 'dialog';
        divModal.setAttribute('data-backdrop', 'static');
        divModal.setAttribute('data-keyboard', 'false');
        divModal.setAttribute('data-source', '');
        divModal.setAttribute('data-title', '');
        divModal.appendChild(divModalDialog);