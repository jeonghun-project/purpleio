import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class OEmbedService {
  constructor(private httpService: HttpService) {}

  oembedRequest(api: string): Observable<AxiosResponse> {
    return this.httpService.get(`${api}`).pipe(
      map((res) => res.data),
      catchError((err) => of(`error : ${err}`)),
    );
  }

  getOEmbed(host: string, url: string): Observable<AxiosResponse> {
    console.log(host, encodeURIComponent(url));
    let stream: Observable<AxiosResponse>;
    if (host === 'www.twitter.com' || host === 'twitter.com') {
      stream = this.oembedRequest(
        `https://publish.twitter.com/oembed?url=${url}`,
      );
    } else if (host === 'www.youtube.com' || host === 'youtube.com') {
      stream = this.oembedRequest(
        `https://${host}/oembed?url=${encodeURIComponent(url)}&format=json`,
      );
    } else if (host === 'www.vimeo.com' || host === 'vimeo.com') {
      stream = this.oembedRequest(
        `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`,
      );
    } else if (host === 'www.instagram.com' || host === 'instagram.com') {
      stream = this.oembedRequest(
        `https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}`,
      );
    }
    stream.subscribe(console.log);
    return stream;
  }

  callOEmbed(url: string) {
    const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/gi;
    const host = regex.exec(url);

    return this.getOEmbed(host[0], url);
  }
}
