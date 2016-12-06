/**
 * IdCheck.IO API
 * Check identity documents
 *
 * OpenAPI spec version: 0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/invoker/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/invoker/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.idcheckio_nodejs_client);
  }
}(this, function(expect, idcheckio_nodejs_client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new idcheckio_nodejs_client.SandboxApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SandboxApi', function() {
    describe('getImage', function() {
      it('should call getImage successfully', function(done) {
        //uncomment below and update the code to test getImage
        //instance.getImage(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getImageList', function() {
      it('should call getImageList successfully', function(done) {
        //uncomment below and update the code to test getImageList
        //instance.getImageList(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMrz', function() {
      it('should call getMrz successfully', function(done) {
        //uncomment below and update the code to test getMrz
        //instance.getMrz(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMrzList', function() {
      it('should call getMrzList successfully', function(done) {
        //uncomment below and update the code to test getMrzList
        //instance.getMrzList(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));