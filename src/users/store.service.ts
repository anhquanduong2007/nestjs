import { Inject, Injectable } from '@nestjs/common';

export class StoreService {
    save(data: any): void {
        console.log(data)
    }
}
