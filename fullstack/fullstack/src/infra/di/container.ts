
/**
 * Simple Dependency Injection
 */
export class DIContainer {
   private static services: Map<string, unknown> = new Map();
   private static instance: DIContainer;
   private static count: number = 0;
   public constructor() {}
 
   // public static getInstance(): DIContainer {
   //   if (!DIContainer.instance) {
   //     DIContainer.instance = new DIContainer();
   //   }
   //   return DIContainer.instance;
   // }

   // getInstance(): DIContainer {
   //    if (!globalThis.__di_container__) {
   //       console.log('creating new container')
   //      globalThis.__di_container__ = new DIContainer();
   //    } else {
   //       console.log('reusing container')
   //    }

   //    return globalThis.__di_container__;
   //  }

   public static getInstance(): DIContainer {
      if (!DIContainer.instance) {
        console.log('Creating new DIContainer instance');
        DIContainer.instance = new DIContainer();
      } else {
        console.log('Reusing existing DIContainer instance');
      }
      return DIContainer.instance;
    }

   static register<T extends keyof DI_TYPES>(name: keyof DI_TYPES, service: DI_TYPES[T], singleton: boolean) {
      
      if (singleton && !this.services.get(name)) {
         this.services.set(name, service);
         
         // this.count++;
         // console.log('new reg', this.count)
      } else if (!singleton) {
         this.services.set(name, service);

         // this.count++;
         // console.log('new reg', this.count)
      } else {
         console.log("Already Register", name)
      }
   }

   static resolve<T extends keyof DI_TYPES>(name: keyof DI_TYPES): DI_TYPES[T] {
      const service = this.services.get(name);
      // console.log('GET COUNT', this.count);

      if (!service) {
        throw new Error(`Service ${name} not found`);
      }

      return service as DI_TYPES[T];
   }
}

// declare global {
//    var __di_container__: DIContainer | undefined;
// }

export const diContainer = DIContainer.getInstance();