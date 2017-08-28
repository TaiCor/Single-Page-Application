export default class {
  constructor ($parse) {
    this.$parse = $parse
    this.restrict = 'A'
  }
}

//   return {
//     restrict: 'A',
//     link: function (scope, element, attrs) {
//       let model = $parse(attrs.demoFileModel)
//       let modelSetter = model.assign
//       element.bind('change', function () {
//         scope.$apply(function () {
//           modelSetter(scope, element[0].files[0])
//         })
//       })
//     }
//   }
// }
