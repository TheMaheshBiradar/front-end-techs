package com.anjali.automation.demo;

import static org.jbehave.core.io.CodeLocations.codeLocationFromClass;

import java.util.Arrays;
import java.util.List;

import org.jbehave.core.embedder.Embedder;
import org.jbehave.core.io.StoryFinder;
import org.jbehave.core.steps.CandidateSteps;

import com.anjali.automation.demo.steps.MainStep;

import net.serenitybdd.jbehave.SerenityStories;

public class TestAAlert extends SerenityStories {

	public List<String> storyPaths() {
		StoryFinder finder = new StoryFinder();
		return finder.findPaths(codeLocationFromClass(this.getClass()).getFile(), Arrays.asList("**/*.story"),  Arrays.asList(""));
	}

	public static void main(String[] args) {

		Embedder embedder = new Embedder();
		List<String> pathsFound = new TestAAlert().storyPaths();
		embedder.candidateSteps().add((CandidateSteps) new MainStep());
		embedder.runStoriesAsPaths(pathsFound);
	}

}
