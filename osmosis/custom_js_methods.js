frappe.ui.form.on("Sales Order", "refresh", function(frm) {
		if (cur_frm.doc.docstatus===0) {																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																												
			cur_frm.add_custom_button(__('Extra Sales Order'), make_extra_sales_order);
		}

});


make_extra_sales_order = function(btn) {
        var eso = frappe.model.make_new_doc_and_get_name('Sales Order');
        eso = locals['Sales Order'][eso];
        eso.project_title = cur_frm.doc.project_title;
        eso.customer = cur_frm.doc.customer;
        eso.parent_sales_order = cur_frm.doc.name;
    
        loaddoc('Sales Order', eso.name);

    }
frappe.ui.form.on("Buyback Item","rate", function(frm) {
    doc.amount = doc.quantity * doc.rate;
})

