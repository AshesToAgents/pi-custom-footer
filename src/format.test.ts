import { describe, it, expect } from "vitest";
import { fmt } from "./format.js";

describe("fmt", () => {
	it("formats millions", () => {
		expect(fmt(1_500_000)).toBe("1.5M");
	});

	it("formats exactly 1 million", () => {
		expect(fmt(1_000_000)).toBe("1.0M");
	});

	it("formats thousands", () => {
		expect(fmt(5_432)).toBe("5k");
		expect(fmt(1_000)).toBe("1k");
	});

	it("formats numbers under 1000 as-is", () => {
		expect(fmt(999)).toBe("999");
		expect(fmt(0)).toBe("0");
		expect(fmt(42)).toBe("42");
	});
});