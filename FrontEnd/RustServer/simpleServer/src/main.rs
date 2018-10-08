#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
extern crate rocket_contrib;
use rocket_contrib::Template;


use std::path::Path;
use rocket::response::NamedFile;

#[get("/hello")]
fn hello() -> &'static str {
	"Hello, world!"
}

#[get("/")]
fn index() -> Option<NamedFile> {
	let path = Path::new("../../../html/index.html");
	NamedFile::open(&path).ok()
}


#[get("/index.css")]
fn css() -> Option<NamedFile> {
	let path = Path::new("../../../html/index.css");//.join(name);
	NamedFile::open(&path).ok()
}

#[post("/myaction")]
fn myaction() -> Option<NamedFile> {
	//let path = Path::new("../../../html/displaySearchRust.html");
	Template::render("displaySearchRust",{"name"})
	//NamedFile::open(&path).ok()
}

fn main() {
    rocket::ignite().mount("/", routes![index, css, myaction]).launch();
//    rocket::ignite().mount("/index.css", routes![css]);//.launch();
//    rocket::ignite().mount("/hello", routes![hello]).launch();
}
