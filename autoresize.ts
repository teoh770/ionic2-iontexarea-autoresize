import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
	selector: "ion-textarea[auto-resize]"
})
export class Autoresize {

	@HostListener("input", ["$event.target"])
	onInput(textArea: HTMLTextAreaElement): void {
		this.adjust();
	}
	constructor(public element: ElementRef) {
	}
	ngOnInit(): void {
		this.adjust();
	}
	adjust(): void {
		let el = this.element.nativeElement.querySelector("textarea");
		el.style.overflow = "hidden";
		el.style.height = "auto";
		el.style.height = el.scrollHeight + "px";
	}

}
