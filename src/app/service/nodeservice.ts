import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { TreeNode } from '../common/api';

@Injectable()
export class NodeService {
    
    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('assets/showcase/data/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
    
    getLazyFiles() {
        return this.http.get('assets/showcase/data/files-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
    
    getFilesystem() {
        return this.http.get('assets/showcase/data/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
    
    getLazyFilesystem() {
        return this.http.get('assets/showcase/data/filesystem-lazy.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}