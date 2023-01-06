import { prisma } from '~~/server/db';

export default defineEventHandler(async event => {
	const id = event.context.params.id;
	const speakers = await prisma.conference
		.findUnique({
			where: {
				id,
			},
			select: {
				speakers: {
					include: {
						Schedule: true,
					},
				},
			},
		})
		.catch(error => {
			if (error) {
				sendError(
					event,
					createError({
						statusCode: 404,
						statusMessage: 'Cannot find speakers with given id',
					}),
				);
			}
		});
	return speakers;
});
