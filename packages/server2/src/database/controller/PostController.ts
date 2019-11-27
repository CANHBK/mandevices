import { getRepository, Repository } from "typeorm";
import { PostEntity } from "../entity/post/PostEntity";
import { PostWhereUniqueInput } from "../../generated/graphql";
import { UserProfileEntity } from "../entity/user/UserProfileEntity";

interface PostCreateInput {
	title: string;
	content: string;
}

interface PostUpdateInput extends PostCreateInput {
	where: {
		id: number;
	};
}

export class PostController {
	private static instance: PostController;
	private constructor(private postRepository: Repository<PostEntity>) {}
	static getInstance = (): PostController => {
		if (!PostController.instance) {
			PostController.instance = new PostController(
				getRepository(PostEntity)
			);
		}
		return PostController.instance;
	};

	createPost(authorId: number, userProfileCreateInput: PostCreateInput) {
		const author = new UserProfileEntity();
		author.id = authorId;

		const post = new PostEntity();
		post.authors = [author];
		post.title = userProfileCreateInput.title;
		post.content = userProfileCreateInput.content;
		return this.postRepository.save(post);
	}

	getPost = (where: PostWhereUniqueInput) => {
		return this.postRepository.findOne(where.id);
	};

	updatePost = (postUpdateInput: PostUpdateInput) => {
		const newPost = new PostEntity();
		const postId = postUpdateInput.where.id;
		newPost.content = postUpdateInput.content;
		newPost.title = postUpdateInput.title;
		return this.postRepository.update(postId, newPost);
	};
	deletePost = (where: PostWhereUniqueInput) => {
		return this.postRepository.delete(where.id);
	};

	getPostsByAuthor = (authorId: number): Promise<PostEntity[]> => {
		return this.postRepository
			.createQueryBuilder("post")
			.leftJoinAndSelect("post.authors", "author")
			.getMany();
	};

	// findById(id: string) {
	// 	return getManager().findOne(UserProfileEntity, id);
	// }
}
