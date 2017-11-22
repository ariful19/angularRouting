/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  @ViewChild("mygmap") mygmap: ElementRef
  constructor(private r2: Renderer2) { }
  markers: google.maps.Marker[] = [];
  ngOnInit() {
    let el = this.mygmap.nativeElement as HTMLDivElement
    this.InitMap(el)
  }
  Map: google.maps.Map;
  InitMap(el: HTMLDivElement) {
    var dhaka = { lat: 23, lng: 90 };
    this.Map = new google.maps.Map(el, {
      zoom: 4,
      center: dhaka
    });
    var marker = new google.maps.Marker({
      position: dhaka,
      map: this.Map
    });
    this.markers.push(marker);
  }
  ChangeCenter(lat: number, lon: number, zoom: number) {
    let inf = new google.maps.InfoWindow({
      content: `lat:${lat}; lon:${lon}`
    })
    var marker = new google.maps.Marker({
      position: { lat: lat, lng: lon },
      map: this.Map, animation: google.maps.Animation.BOUNCE,
      clickable: true, title: 'salam'
    });
    this.Map.setCenter({ lat: lat, lng: lon })
    this.Map.setZoom(zoom)
    marker.addListener('click', () => {
      inf.open(this.Map, marker)
    })
    this.markers.push(marker)
  }
  Clear() {
    this.markers.forEach(o => o.setMap(null))
    this.markers = []
  }
}
