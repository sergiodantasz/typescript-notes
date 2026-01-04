type VotingOption = {
  text: string;
  numberOfVotes: number;
};

class Voting {
  private readonly _votingOptions: VotingOption[] = [];

  constructor(public readonly text: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(votingOptionIndex: number): void {
    const votingOption = this._votingOptions.at(votingOptionIndex);
    if (!votingOption) return;
    votingOption.numberOfVotes++;
  }

  get votingOptions() {
    return this._votingOptions;
  }
}

class VotingApp {
  private readonly voting: Voting[] = [];

  addVoting(voting: Voting): void {
    this.voting.push(voting);
  }

  showVoting(): void {
    console.log("--- Welcome to the Voting App! ---\n");
    for (const voting of this.voting) {
      console.log(`## ${voting.text} ##`);
      for (const option of voting.votingOptions) {
        console.log(`${option.text} [${option.numberOfVotes}]`);
      }
      console.log("## -/- ##\n");
    }
  }
}

const voting1 = new Voting("What is your favorite programming language?");

voting1.addVotingOption({ text: "Python", numberOfVotes: 0 });
voting1.addVotingOption({ text: "JavaScript", numberOfVotes: 0 });
voting1.addVotingOption({ text: "Ruby", numberOfVotes: 0 });
voting1.addVotingOption({ text: "C++", numberOfVotes: 0 });

voting1.vote(0);
voting1.vote(0);
voting1.vote(1);
voting1.vote(2);
voting1.vote(3);
voting1.vote(3);
voting1.vote(3);

const voting2 = new Voting("What is your favorite color?");

voting2.addVotingOption({ text: "Red", numberOfVotes: 0 });
voting2.addVotingOption({ text: "Green", numberOfVotes: 0 });
voting2.addVotingOption({ text: "Blue", numberOfVotes: 0 });
voting2.addVotingOption({ text: "Yellow", numberOfVotes: 0 });

voting2.vote(0);
voting2.vote(1);
voting2.vote(1);
voting2.vote(1);
voting2.vote(1);
voting2.vote(2);
voting2.vote(2);
voting2.vote(3);

const votingApp = new VotingApp();

votingApp.addVoting(voting1);
votingApp.addVoting(voting2);

votingApp.showVoting();
