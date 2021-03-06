import {Widget} from '../model/widget.model.client';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class WidgetService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  // widgets: Widget[] = [
  //   { _id: '123', widgetType: 'HEADER', pageId: '321', size: '2', text: 'GIZMODO', url: '', width: '' },
  //   { _id: '234', widgetType: 'HEADER', pageId: '321', size: '4', text: 'This is yangyangnvw speaking!!!', url: '', width: '' },
  //   { _id: '345', widgetType: 'IMAGE', pageId: '321', size: '', text: 'This is xiaohua speaking!!!',
  //    url: 'http://lorempixel.com/400/200/', width: '100%'},
  //   { _id: '456', widgetType: 'HTML', pageId: '321', size: '', text: '<p>Lorem ipsum</p>', url: '', width: '' },
  //   { _id: '567', widgetType: 'HEADER', pageId: '321', size: '4', text: 'Where is Xiaomai ???', url: '', width: '' },
  //   { _id: '333', widgetType: 'IMAGE', pageId: '321', size: '4', text: 'IMAGE XIAOMAI',
  //     url: 'https://img.yqdown.com/img2015/9/16/2015091639600313.jpg', width: '100%' },
  //   { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: '', text: 'Lorem ipsum',
  //     url: 'https://youtu.be/bzc86YRta0M', width: '100%' },
  //   { _id: '789', widgetType: 'HTML', pageId: '321', size: '<p>Lorem ipsum</p>', text: 'Yangyang slhj zgntw', url: '', width: '' }
  // ];

  // widgets = [
  //   {
  //     _id: '123',
  //     widgetType: 'HEADER',
  //     name: ' ',
  //     pageId: '321',
  //     size: '2',
  //     text: 'GIZMODO',
  //     url: '',
  //     width: '',
  //     height: 100,
  //     rows: 0,
  //     class: '',
  //     icon: '',
  //     deletable: false,
  //     formatted: false,
  //     placeholder: ''
  //   },
  //   {
  //     _id: '234',
  //     widgetType: 'HEADER',
  //     name: ' ',
  //     pageId: '321',
  //     size: '4',
  //     text: 'Lorem ipsum',
  //     url: '',
  //     width: '',
  //     height: 100,
  //     rows: 0,
  //     class: '',
  //     icon: '',
  //     deletable: false,
  //     formatted: false,
  //     placeholder: ''
  //   },
  //   // { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
  //   {
  //     _id: '456',
  //     widgetType: 'HTML',
  //     name: 'html name',
  //     pageId: '321',
  //     size: '',
  //     text: '<p>Lorem ipsum</p>',
  //     url: '',
  //     width: '',
  //     height: 100,
  //     rows: 0,
  //     class: '',
  //     icon: '',
  //     deletable: false,
  //     formatted: false,
  //     placeholder: ''
  //   },
  //   {
  //     _id: '567',
  //     widgetType: 'HEADER',
  //     name: ' ',
  //     pageId: '321',
  //     size: '4',
  //     text: 'Lorem ipsum',
  //     url: '',
  //     width: '',
  //     height: 100,
  //     rows: 0,
  //     class: '',
  //     icon: '',
  //     deletable: false,
  //     formatted: false,
  //     placeholder: ''
  //   },
  //   {
  //     _id: '678',
  //     widgetType: 'YOUTUBE',
  //     name: ' ',
  //     pageId: '321',
  //     size: '',
  //     text: '',
  //     url: 'https://youtu.be/AM2Ivdi9c4E',
  //     width: '100%',
  //     height: 100,
  //     rows: 0,
  //     class: '',
  //     icon: '',
  //     deletable: false,
  //     formatted: false,
  //     placeholder: ''
  //   },
  //   {
  //     _id: '789',
  //     widgetType: 'HTML',
  //     name: 'html name',
  //     pageId: '321',
  //     size: '<p>Lorem ipsum</p>',
  //     text: '',
  //     url: '',
  //     width: '',
  //     height: 100,
  //     rows: 0,
  //     class: '',
  //     icon: '',
  //     deletable: false,
  //     formatted: false,
  //     placeholder: ''
  //   }
  // ];

  // api = {
  //   'createWidget': this.createWidget,
  //   'findWidgetsByPageId': this.findWidgetsByPageId,
  //   'findWidgetById': this.findWidgetById,
  //   'updateWidget': this.updateWidget,
  //   'deleteWidget': this.deleteWidget
  // };

  // createWidget(pageId: String, widget: any) {
  //   widget._id = Math.random().toString();
  //   widget.pageId = pageId;
  //   this.widgets.push(widget);
  // }

  createWidget(pageId: String, widget: Widget) {
    console.log('client side create widget');
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    console.log('create widget url = ' + url);
    return this.http.post(url, widget).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  // findWidgetsByPageId(pageId: String) {
  //   const resultSet: Widget[] = [];
  //   for (let x = 0; x < this.widgets.length; x++) {
  //     if (this.widgets[x].pageId === pageId) {
  //       resultSet.push(this.widgets[x]);
  //     }
  //   }
  //   return resultSet;
  // }

  findWidgetsByPageId(pageId: String) {
    console.log('client side find widgtes by pageid');
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    console.log('find widget url =  ' + url);
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  // findWidgetById(widgetId: String) {
  //   for (let x = 0; x < this.widgets.length; x++) {
  //     if (this.widgets[x]._id === widgetId) {
  //       return this.widgets[x];
  //     }
  //   }
  // }

  findWidgetById(widgetId: String) {
    console.log('client side find widget by id');
    const url = this.baseUrl + '/api/widget/' + widgetId;
    console.log('find widget id url = ' + url);
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deleteWidget(widgetId: String) {
    console.log('client side delelte widget');
    const url = this.baseUrl + '/api/widget/' + widgetId;
    console.log('delete widget url = ' + url);
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  // deleteWidget(widgetId: String) {
  //   console.log('client side delete widget');
  //   const url = this.baseUrl + '/api/widget/' + widgetId;
  //   return this.http.delete(url).map(
  //     (res: Response) => {
  //       return res.json();
  //     }
  //   );
  // }


  // updateWidget(widgetId: String, widget: any) {
  //   for (let x = 0; x < this.widgets.length; x++) {
  //     if (this.widgets[x]._id === widgetId && this.widgets[x].widgetType === widget.widgetType) {
  //       switch (widget.widgetType) {
  //         case 'HEADER':
  //           this.widgets[x].text = widget.text;
  //           this.widgets[x].size = widget.size;
  //           return true;
  //
  //         case 'IMAGE':
  //           this.widgets[x].text = widget.text;
  //           this.widgets[x].url = widget.url;
  //           this.widgets[x].width = widget.width;
  //           return true;
  //
  //         case 'YOUTUBE':
  //           this.widgets[x].text = widget.text;
  //           this.widgets[x].url = widget.url;
  //           this.widgets[x].width = widget.width;
  //           return true;
  //       }
  //     }
  //   }
  // }

  updateWidget(widgetId: String, widget: Widget) {
    console.log('client side update widget');
    console.log('widget url client side = ' + widget.url);
    const url = this.baseUrl + '/api/widget/' + widgetId;
    console.log('update widget url = ' + url);
    return this.http.put(url, widget).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  orderWidgets(startIndex, endIndex, pageId) {
    console.log('client side order widget');
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
    console.log('order widget url= ' + url);
    return this.http.put(url, '').map(
      (res: Response) => {
        const data = res;
        return data;
      }
    );
  }

  findImage(imageName: String) {
    console.log('client side find image----');
    const url = this.baseUrl + '/api/image/' + imageName;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
