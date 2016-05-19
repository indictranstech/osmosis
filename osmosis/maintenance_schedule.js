cur_frm.add_fetch('Sales_Order', 'advance_paid', 'pay_recevied');
cur_frm.add_fetch('Sales_Order', 'client_id', 'client_id');
cur_frm.add_fetch('Customer', 'client_id', 'client_id');

frappe.ui.form.on("Maintenance Schedule", {
	refresh: function(frm) {
		cur_frm.fields_dict.items.grid.get_field("wing").get_query = function(doc) {
				return {filters: {
						'customer': doc.customer
					}
				}
		}
	}
})

frappe.ui.form.on("Maintenance Visit", {
	refresh: function(frm) {
		cur_frm.fields_dict.purposes.grid.get_field("wing").get_query = function(doc) {
				return {filters: {
						'customer': doc.customer
					}
				}
		}
	}
})