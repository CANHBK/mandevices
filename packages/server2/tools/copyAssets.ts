import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/rest-api/views", "build/rest-api" );