'use strict';

describe('Controller: LookbookdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var LookbookdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LookbookdetailCtrl = $controller('LookbookdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LookbookdetailCtrl.awesomeThings.length).toBe(3);
  });
});
