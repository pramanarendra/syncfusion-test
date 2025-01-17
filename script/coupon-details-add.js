// Breadcrumbs Component
ej.base.enableRipple(true);
new ej.navigations.Breadcrumb({
    enableNavigation: false,
    separatorTemplate: '<span>-</span>'
}, '#breadcrumb')

// Button component
var button = new ej.buttons.Button({ cssClass: `e-fla`, iconCss: 'e-icons e-close', isPrimary:true}, '#closeButton');

// Dropdown Component
var securitiesData = [
  {
    id: 'ABLS01XXMF',
    securitiesName: 'MTN Asian Bulk Logistics I Tahun 2022'
  },
  {
    id: 'ABLS02XXMF',
    securitiesName: 'MTN Asian Bulk Logistics II Tahun 2022'
  },
  {
    id: 'ABLS03XXMF',
    securitiesName: 'MTN Asian Bulk Logistics III Tahun 2022'
  }
]

var listObj = new ej.dropdowns.DropDownList({
  dataSource: securitiesData,
  fields: { value: 'securitiesName' },
  placeholder: "Select Securities ID"
})
listObj.appendTo('#securitiesIdDropdown')

// Grid Component
ej.grids.Grid.Inject(
  ej.grids.Page,
  ej.grids.Edit
)
var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: "serialNumber",
      headerText: "Serial Number",
      width: 100,
      type: "number",
      isPrimaryKey: 'true'
    },
    {
      field: "periodFrom",
      width: 100,
      headerText: "Period From",
      type: "date",
      format: "dd/MM/yyyy",
      editType: 'datepickeredit'
    },
    {
      field: "periodTo",
      width: 100,
      headerText: "Period To",
      type: "date",
      format: "dd/MM/yyyy",
      editType: 'datepickeredit',
    },
    {
      field: "paymentDate",
      width: 100,
      headerText: "Payment Date",
      type: "date",
      format: "dd/MM/yyyy",
      editType: 'datepickeredit'
    },
    {
      field: "newCoupon",
      headerText: "New Coupon",
      textAlign: "Right",
      width: 100,
      type: "number",
      editType: 'numericedit'
    },
    {
      field: "feeIjarah",
      headerText: "Fee Ijarah",
      width: 100,
      type: "number",
      editType: 'numericedit'
    },
    {
      field: "nisbah",
      headerText: "Nisbah",
      width: 100,
      type: "number",
      editType: 'numericedit'
    },
    {
      headerText: 'Action',
      width: 120,
      commands: [
        { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
        { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
      ]
    },
  ],
  allowPaging: true,
  pageSettings: { pageSize: 7 },
  editSettings: { allowEditing: true },
})
grid.appendTo('#Grid')