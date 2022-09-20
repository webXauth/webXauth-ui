import { useState } from "react";
import { Button, Icon, Input } from "../../atoms";
import { TextInfo } from "../../molecules";
import { Web3 } from "../Web3/Web3";
import styles from "./WebTwoThree.module.scss";
interface IWeb2 {
	icon: string;
	name: string;
}
interface IWeb3 {
	name: string;
	icon: string;
	network: string;
	publicKey: string;
}
interface WebTwoThreeProps {
	web2: IWeb2[];
	web3: IWeb3[];
}
enum Flow {
	home,
	web3,
	web2,
	email,
}
export const WebTwoThree = ({ web2, web3 }: WebTwoThreeProps) => {
	const [flow, setFlow] = useState(Flow.home);
	const [activeWeb2Provider, setActiveWeb2Provider] =
		useState<IWeb2 | null>(null);
	const [activeWeb3Provider, setActiveWeb3Provider] =
		useState<IWeb3 | null>(null);
	return (
		<div style={{ width: "100%" }}>
			{flow === Flow.home && (
				<Home
					web2={web2}
					web3={web3}
					setFlow={setFlow}
					setActiveWeb2Provider={setActiveWeb2Provider}
					setActiveWeb3Provider={setActiveWeb3Provider}
				/>
			)}
			{flow === Flow.email && <Login setFlow={setFlow} />}
			{flow === Flow.web2 && (
				<Web2
					activeProvider={activeWeb2Provider!}
					setFlow={() => setFlow(Flow.home)}
				/>
			)}
			{flow === Flow.web3 && (
				<Web3
					wallets={web3}
					currentWallet={activeWeb3Provider}
					setFlow={() => setFlow(Flow.home)}
				/>
			)}
		</div>
	);
};
interface HomeProps extends WebTwoThreeProps {
	setFlow: (flow: Flow) => void;
	setActiveWeb2Provider: (provider: IWeb2 | null) => void;
	setActiveWeb3Provider: (provider: IWeb3 | null) => void;
}

const Home = ({
	web2,
	web3,
	setFlow,
	setActiveWeb2Provider,
	setActiveWeb3Provider,
}: HomeProps) => {
	return (
		<div
			style={{ marginBlockStart: "2rem", width: "100%" }}
			className={styles.container}
		>
			<TextInfo
				title={{ text: "WebXAuth", as: "h1" }}
				text="Authenticate with Web2 or Web3"
				className={styles.title}
			/>
			<Button
				onClick={() => setFlow(Flow.email)}
				style={{
					border: "0.1rem solid rgb(201, 202, 206)",
					width: "fit-content",
					placeSelf: "center",
				}}
			>
				Continue with Bonuz
			</Button>
			<div className={styles.list}>
				{web2.map((w) => (
					<Icon
						src={w.icon}
						name={w.name}
						onclick={() => {
							setActiveWeb2Provider(w);
							setFlow(Flow.web2);
						}}
						width="40"
						height="40"
						key={w.name}
					/>
				))}
			</div>
			<footer className={styles.footer}>
				<div className={styles.list}>
					{web3.map((w) => (
						<Icon
							src={w.icon}
							name={w.name}
							onclick={() => {
								setActiveWeb3Provider(w);
								setFlow(Flow.web3);
							}}
							key={w.name}
						/>
					))}
				</div>
			</footer>
		</div>
	);
};
const Web2 = ({
	activeProvider,
	setFlow,
}: {
	activeProvider: IWeb2;
	setFlow: () => void;
}) => {
	return (
		<div className={styles.web2}>
			You clicked on {activeProvider.name} sign in method, you should be
			redirected/popup to {activeProvider.name} complete the authentication flow
			<Button onClick={setFlow}>Back</Button>
		</div>
	);
};
enum Step {
	email,
	password,
	confirmation,
	confirmed,
}
interface LoginProps {
	setFlow: (step: Flow) => void;
}
export const Login = ({ setFlow }: LoginProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [step, setStep] = useState(Step.email);
	const isInput = step === Step.email || step === Step.password;
	const handleEmail = () => {
		// validate email
		setStep(Step.password);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		// validate password
		// send email confirmation
		// go to step 3
		e.preventDefault();
		console.log(email, password);
		setStep(Step.confirmation);
	};
	const handleClose = () => {
		// close the window
	};
	const handleBack = () => {
		// go back to login/home
		if (step === Step.email) {
			return;
		}
		setStep((prev) => prev - 1);
	};
	const handleCancel = () => {
		setFlow(Flow.home);
	};
	/// Query with confirmation token and set step to confirmed

	return (
		<div className={styles.login}>
			{isInput && (
				<form onSubmit={handleSubmit}>
					{step === Step.email && (
						<>
							<Input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="email"
								label="Enter your email address:"
							/>
							<Button
								type="button"
								style={{
									width: "100%",
									border: "0.1rem solid rgb(201, 202, 206)",
								}}
								onClick={() => setStep(Step.password)}
							>
								Continue
							</Button>
						</>
					)}
					{step === Step.password && (
						<>
							<Input
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								id="password"
								label="Enter your password:"
							/>
							<Button type="submit" style={{ width: "100%" }}>
								Continue
							</Button>
						</>
					)}
					{isInput && (
						<div role="button" className={styles.back} onClick={handleBack}>
							Back to login
						</div>
					)}
				</form>
			)}
			{step === Step.confirmation && (
				<TextInfo
					text="Your account was successfully created. Please activate your account by clicking the link in your mail box."
					button={{
						text: "Close",
						onClick: () => {
							setStep(Step.email);
							setFlow(Flow.home);
						},
					}}
					className={styles.info}
				/>
			)}
			{step === Step.confirmed && (
				<TextInfo
					text="Thanks for joining Bonuz. Your account is successfully activated."
					button={{ text: "Close", onClick: () => setStep(Step.email) }}
					className={styles.info}
				/>
			)}
			{isInput && (
				<footer className={styles.footer}>
					<p>
						or <u onClick={handleCancel}>cancel</u> and get back to Bonuz
					</p>
				</footer>
			)}
		</div>
	);
};
