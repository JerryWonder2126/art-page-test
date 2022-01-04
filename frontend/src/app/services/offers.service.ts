import { Injectable } from '@angular/core';
import { MainDataInterface, SectionInnerItemInterface, SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private _mainData: MainDataInterface[] = [
    {
      title: 'potrait drawing',
      imgURL: "assets/sample-box.png",
      offers: [
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        }
      ]
    },
    {
      title: 'abstract art',
      imgURL: "assets/sample-box.png",
      offers: [
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        }
      ]
    },
    {
      title: 'crafts',
      imgURL: "assets/sample-box.png",
      offers: [
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        }
      ]
    },
    {
      title: 'face painting',
      imgURL: "assets/sample-box.png",
      offers: [
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        }
      ]
    },
    {
      title: 'pencil drawings',
      imgURL: "assets/sample-box.png",
      offers: [
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        },
        {
          title: '40 inches painting',
          short_description: 'short note on object',
          long_description: `Some text for description. are used for the storing of energy in a 
          rotating machine and to limit speed fluctuations. Formulae are given for the 
          calculation of the moment of inertia of flywheels and for speed and energy fluctuation`,
          imgURL: ["assets/sample-box.png"],
          price: '20K'
        }
      ]
    },
    // {
    //   title: 'picture frames',
    //   imgURL: "assets/sample-box.png",
    //   offers: []
    // }
  ];

  private services: SectionItemInterface[] = [
    {
      title: 'potrait drawing',
      imgURL: "assets/sample-box.png"
    },
    {
      title: 'abstract art',
      imgURL: "https://drive.google.com/uc?id=QlkuYM_ZTq6ZXEqYgHAqDlr8H8lW6982"
    },
    {
      title: 'crafts',
      imgURL: "assets/sample-box.png"
    },
    {
      title: 'face painting',
      imgURL: "assets/sample-box.png"
    },
    {
      title: 'pencil drawings',
      imgURL: "assets/sample-box.png"
    },
    {
      title: 'picture frames',
      imgURL: "assets/sample-box.png"
    }
  ];

  constructor() { }

  get mainData() {
    return this._mainData;
  }

  getServices() {
    return this.services;
  }

  getDataByService = (title:string): MainDataInterface|undefined => this._mainData.find((obj) => obj.title === title);

  getOffer(service: string, title: string): SectionInnerItemInterface|undefined {
    let offer = undefined;
    let requestedService = this.mainData.find((obj) => obj.title === service);
    if (requestedService) {
      offer = requestedService.offers.find(obj => obj.title === title);
    }
    return offer;
  }

}
