import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-angular-google-map',
  templateUrl: './angular-google-map.component.html',
  styleUrls: ['./angular-google-map.component.scss']
})
export class AngularGoogleMapComponent implements OnInit {
  searchControl: FormControl;
  zoom: number;
  formatted_address: string;
  @ViewChild('search')
  searchElementRef: ElementRef;
  latitude: number;
  longitude: number;
  addressData: any = {};
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.zoom = 15;
    this.searchControl = new FormControl();
    if (this.searchElementRef) {
      this.mapsAPILoader.load().then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ['address']
        });
        // autocomplete.setComponentRestrictions(
        //   { 'country': ['us'] });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              this.formatted_address = undefined;
            } else {
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.formatted_address = place.formatted_address;
              for (let i = 0; i < place.address_components.length; i++) {
                const addressType = place.address_components[i].types[0];
                this.addressData[addressType] = place.address_components[i].long_name;
              }
            }
            if (!this.addressData.postal_code) {
              alert('Postal code is not available for selected address. Please select an address with postal code.');
              this.formatted_address = undefined;
            }
          });
        });
      });
    }
  }
  checkIsEmpty(event) {
    if (this.searchElementRef.nativeElement.value === '') {
      this.formatted_address = undefined;
    }
  }
}
