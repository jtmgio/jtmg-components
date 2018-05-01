# jtmgio-UI-Components

## Creating/Deploying a Shared Component 
1. Create feature/bug branch from master repo 

	```bash
	git checkout master
	git pull --rebase origin master
	git checkout -b YOUR.INITIALS/feature|bug/feature|bug_name
	```


1. Create shared component

	In `/src/app/components/` directory you will find a directory list of components. Here you will create a new directory to contain your component. There is a required file that must be present in each of these component directories. This is `public-api.ts`. This file is used to export all exportable typescript files. This follows the exporting convention in Angular component libraries. 

	File Example
	```ts
	export * from "./iTable.definition";
	export * from "./jtmgio-table.module";
	export * from "./jtmgio-paginator/jtmgio-paginator";
	export * from "./jtmgio-paginator/client.datasource";
	export * from "./jtmgio-paginator/http.datasource";
	export * from "./jtmgio-paginator/iColumns.definition";
	export * from "./jtmgio-paginator/jtmgio-paginator.module";
	export * from "./jtmgio-paginator/jtmgio-paginator.intl";
	export * from "./jtmgio-table";
	export * from "./jtmgio-table-header";
	export * from "./jtmgio-paginator/jtmgio-paginator.abstract";
	export * from "./table.module";
	```

2. Add component `pubic-api.ts` to main api
	
	In the root of the repo, you will find a `publc-api.ts` file. Here you will add the new component public api. Example 

	```ts
	export * from "./src/app/components/table/public-api";
	export * from "./src/app/components/modal/public-api";
	```

3. Submit your change for Code Review

	Submit your change/addition for a peer code review. 


4. Compile Components

	In the root of the repo, run the following command in terminal
	
	`npm run package`

	This will package the component(s) for distribution. Once you have successfully compiled the components you can publish the compilation to NPM Registry

3. Commit and Publish

	NPM requires that the repo be in a clean state before deploying to NPM. Run through your GIT flow and push all changes to the remote origin. Once committed, you will need to update the version of the library. Run the following commands. 

	**Note - The major version of the library follows the current version of Angular that is in use.

	`npm version 'major|minor|patch`

	This will increment the library appropriately. *Note, you will need to commit this change to GIT once updated.  

	_patch level_
		
		Patch level changes are for bug fixes ONLY. These bug fixes need to ensure that they do not cause any breaking changes to current uses of library 

		**Note - Any library change or update that is used to update is at least a minor level change. a library change can break backwards compatiability. 

	_minor level_ 

		This is for feature development that IS backwards compatible. These changes should be tested for backwards compatibility for current use of component. 
	
		**Note - Any library change or update that is used to update is at least a minor level change. a library change can break backwards compatiability. 

	_major level_

		This is for breaking changes to the code base and require a team effort to plan and execute. 

		**Note - Any library change or update that is used to update is at least a minor level change. a library change can break backwards compatiability. 

5. Create GIT Tag and Release Notes. 

	`npm version patch|minor|major` creates a git tag of the current version you have moved to. In order to have GIT reflect this you must push this tag to the remote. 

	`git push origin vX.X.X`

	This command will push this new tag up to the remote master. 

	Once the tag is pushed, you will need to edit the release notes. Editing release notes can be found here:
	https://github.com/jtmgio/jtmgio-ui-components/releases/new?tag=vX.X.X (replace x.x.x with the tag)
 
	Here youw will add comments about the release and a link to the leankit story (if there is one). 
	
5. Deploy to NPM

	Once the library is compiled successfully, you will need to deploy the `dist` files to NPM. Run the following command in the root of the repo. *Note - you will need to be logged into the @jtmgio scope first

	`npm publish dist`

## Testing you component 

In the `/src/app/modules` directory you can test your component using the sandbox provided. 

1. Create Feature Module

	In the `/src/app/modules`, you can create a feature module to contain your component. The following files will need to be created in order to test with
	```ts
	component-name.component.ts
	component-name.module.ts
	```
	use these files to house the component you created.

2. Add Feature Module To App Module

	You will need to add your feature module to the app module. Use Angular standards to do so

3. Update Router

	In `app-routing.module`, you will need to add the route of your new component. Follow the current format appropriately. 

4. Update Component List

	In `component-list.component.ts`, you will need a add an entry in `public links` array that reflects your component (used for links)

5. Serve Sandbox

	If everything was done correctly you should see your component by running `ng serve` in root of repo. 

## Consuming your library in a local application during development

To consume your library in a local application before you publish it to npm, you can follow the following steps:

  
1. Compile your library files:
  ```
  npm run package  
  ```
  
2. From the `sample-library/dist` directory, create a symlink in the global node_modules directory to the `dist` directory of your library:
  ```
  cd dist
  npm link 
  ```
  
 
4. Navigate to the your consuming app directory:
  ```
  cd my-app
  ``` 
  
5. From the `my-app` directory, link the global `@jtmgio/jtmgio-ui-components` directory to node_modules of the `my-app` directory:
  ```
  npm link @jtmgio/sample-library
  ```
  
6. Import `@jtmgio/jtmgio-ui-components` in your Angular application:

  ```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  
  import { AppComponent } from './app.component';
  
  // Import your library
  import { SampleModule } from '@jtmgio/jtmgio-ui-components';
  
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      
      // Specify your library as an import
      SampleModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

7. Once your shared library is imported, you can use its components, directives and pipes in your Angular application templates:

  ```xml
  <!-- app.component.html -->
  <h1>{{ title }}</h1>
  <sample-component>
    This component is part of the shared library and will now work as expected.
  </sample-component>
  ```
  
  and if you need to access a service from your shared library, you can inject it using Dependency Injection:
  
  ```ts
  import { Component } from '@angular/core';
  
  // Import the shared service
  import { SampleService } from '@jtmgio/jtmgio-ui-components';
  
  @Component({
    template: 'Injecting a service from the shared library'
  })
  export class HomeComponent {
  
    // Inject the service using Angular DI 
    constructor(private sampleService: SampleService){
    
    }
  
  }
  ```
  
8. When you make a change to your library, recompile your library files again from your `@jtmgio/jtmgio-ui-components` directory:
  ```
  npm run package
  ```
    
  
9. If you are using an Angular CLI application to consume your library, make sure to set up a [path mapping](https://github.com/angular/angular-cli/wiki/stories-linked-library#use-typesscript-path-mapping-for-peer-dependencies) in `/src/tsconfig.app.json` of your consuming application (not your library):
  ```typescript
  {
    "compilerOptions": {
      // ...
      // Note: these paths are relative to `baseUrl` path.
      "paths": {
        "@angular/*": [
          "../node_modules/@angular/*"
        ]
      }
    }
  }
  ```
  
When you npm link a library with peer dependencies, the [consuming application searches for the peer dependencies in the library's parent directories instead of the application's parent directories](http://codetunnel.io/you-can-finally-npm-link-packages-that-contain-peer-dependencies).

If you get `Error: Unexpected value '[object Object]' imported by the module 'AppModule'. Please add a @NgModule annotation.`, then try:

```
ng build --preserve-symlinks
```
